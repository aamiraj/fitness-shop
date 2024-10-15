import { useForm } from "react-hook-form";
import { TFormProduct } from "../../types/product.types";
import React, { useEffect, useState } from "react";
// import Product from "../assets/product/p-1.webp";
import { FaArrowLeft, FaArrowRotateLeft, FaXmark } from "react-icons/fa6";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/products/productsApi";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductSchema } from "../../validation/product.validation";
import { Link, useParams } from "react-router-dom";

type TImage = {
  [key: string]: string | File | null;
  id: string;
  src: string;
  file: File | null;
};

const getId = () => Math.random().toString(36).substring(2, 7);

const EditProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isFetching, isError } = useGetSingleProductQuery(productId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormProduct>({
    resolver: zodResolver(addProductSchema),
  });
  const [imgs, setImgs] = useState<TImage[] | null>(null);
  const [updateProduct, {isLoading: isUpdating}] = useUpdateProductMutation();

  const onSubmit = async (data: TFormProduct) => {
    const formData = new FormData();

    const refinedData = {
      images: [] as string[],
      name: data.name,
      description: data.description,
      price: parseFloat(data.price as string),
      stock: parseFloat(data.stock as string),
      category: data.category,
    };

    if (imgs) {
      for (let i = 0; i < imgs?.length; i++) {
        if (imgs[i].file) {
          formData.append("images", imgs[i].file as File);
        } else {
          refinedData.images.push(imgs[i].src);
        }
      }
    }

    formData.append("data", JSON.stringify(refinedData));

    const response = await updateProduct({ id: productId, data: formData }).unwrap();

    if (!response?.success) {
      toast.error("Failed to update product in the database.");
    }

    toast.success("Sucessfully updated product in the database.");
  };

  const handelImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = e.target.files;
    if (imgFiles) {
      const imgObject = [...imgFiles].map((file) => ({
        id: getId(),
        src: URL.createObjectURL(file as File),
        file: file,
      }));

      setImgs((prev) => (prev ? [...prev, ...imgObject] : imgObject));
    }
  };

  const handleImageDelete = (id: string) => {
    const newImgObject = (imgs as TImage[])?.filter((obj) => obj.id !== id);
    setImgs(newImgObject);
  };

  useEffect(() => {
    if (!data?.data?.images) return;

    const imgObject = data?.data?.images.map((img: string) => ({
      id: getId(),
      src: img,
      file: null,
    }));

    setImgs(imgObject);
  }, [data]);

  if (isFetching) {
    return (
      <div className="max-w-[1024px] h-24 mx-auto flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-[1024px] h-24 mx-auto">
        <p className="text-error text-center">Error occured while loading.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[768px] mx-auto my-8">
      <div className="container">
        <div className="flex items-center gap-4 my-8">
          <Link
            to={"/admin/product-management"}
            className="text-xl md:text-2xl lg:text-4xl"
          >
            <FaArrowLeft />
          </Link>
          <p className="font-bold text-xl md:text-2xl lg:text-4xl">
            Edit Product
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-8">
          {/* product images  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="images">Product Images</label>
            <div className="flex items-center justify-start gap-4">
              <input
                type="file"
                id="images"
                accept=".png, .jpg, .jpeg, .webp"
                multiple={true}
                className="cursor-pointer block w-max outline-none text-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:text-white dark:file:bg-gray-700 file:text-brandBlue hover:file:bg-violet-100"
                onChange={handelImagePreview}
              />
              {/* reset button  */}
              <button
                type="button"
                onClick={() => setImgs(null)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-100/10"
              >
                <FaArrowRotateLeft />
              </button>
            </div>

            <div className="w-full relative flex flex-col sm:flex-row items-center gap-4 p-4 border border-dashed bg-gray-50 dark:bg-gray-700 border-brandBlue rounded-lg overflow-auto">
              {imgs?.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group border-8 border-transparent hover:border-gray-200 rounded-lg"
                >
                  <button
                    type="button"
                    onClick={() => handleImageDelete(img.id)}
                    className="hidden group-hover:block absolute -top-4 -right-4 text-lg font-bold p-1 bg-gray-200 hover:bg-gray-300 rounded-full z-10"
                  >
                    <FaXmark />
                  </button>
                  <img
                    src={img?.src}
                    alt="product"
                    className="w-11/12 sm:w-32 object-cover group-hover:scale-105"
                  />
                </div>
              ))}

              {(imgs === null || imgs.length === 0) && (
                <p className="text-center text-gray-500">No file choosen.</p>
              )}
            </div>
          </div>
          {/* product name or title  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Product Name/Title</label>
            <input
              defaultValue={data?.data?.name ?? ""}
              type="text"
              id="name"
              placeholder="e.g. 2kg vinyl dumbbell-1 Pair"
              {...register("name")}
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            />
            {errors.name && (
              <p className="text-error italic text-sm">
                *{errors.name.message?.toString()}
              </p>
            )}
          </div>
          {/* product description  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              defaultValue={data?.data?.description}
              rows={4}
              placeholder="Description of the product, such as specifications, features, height, weight etc."
              {...register("description")}
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            ></textarea>
            {errors.description && (
              <p className="text-error italic text-sm">
                *{errors.description.message?.toString()}
              </p>
            )}
          </div>
          {/* product price  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Product Price</label>
            <input
              defaultValue={data?.data?.price ?? ""}
              type="number"
              min={0}
              step={0.01}
              id="price"
              onWheel={(e) =>
                e.target instanceof HTMLInputElement && e.target.blur()
              }
              placeholder="eg. 1200.00"
              {...register("price")}
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            />
            {errors.price && (
              <p className="text-error italic text-sm">
                *{errors.price.message?.toString()}
              </p>
            )}
          </div>
          {/* stock of the product  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="stock">Product Stock</label>
            <input
              defaultValue={data?.data?.stock ?? ""}
              type="number"
              min={0}
              step={1}
              id="stock"
              onWheel={(e) =>
                e.target instanceof HTMLInputElement && e.target.blur()
              }
              placeholder="eg. 100"
              {...register("stock")}
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            />
            {errors.stock && (
              <p className="text-error italic text-sm">
                *{errors.stock.message?.toString()}
              </p>
            )}
          </div>
          {/* category of product  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Product Category</label>
            <select
              id="category"
              {...register("category")}
              defaultValue={data?.data?.category ?? ""}
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            >
              <option value="" disabled>
                Choose category
              </option>
              <option value="Bike">Bike</option>
              <option value="Treadmill">Treadmill</option>
              <option value="Dumbbell">Dumbbell</option>
              <option value="Gym">Gym</option>
              <option value="Bench">Bench</option>
              <option value="Misc">Misc</option>
            </select>
            {errors.category && (
              <p className="text-error italic text-sm">
                *{errors.category.message?.toString()}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 my-4">
            <button
              type="submit"
              className="w-full md:w-[200px] bg-brandBlue text-white cursor-pointer hover:bg-blue-800 duration-300 py-2 px-8 rounded-full relative z-10 uppercase"
              disabled={isUpdating}
            >
              Update product
            </button>

            <button
              type="submit"
              className="w-full md:w-[200px] bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300 duration-300 py-2 px-8 rounded-full relative z-10 uppercase"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
