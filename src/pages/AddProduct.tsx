import { useForm } from "react-hook-form";
import { TFormProduct } from "../types/product.types";
import React, { useState } from "react";
// import Product from "../assets/product/p-1.webp";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useAddProductMutation } from "../redux/features/products/productsApi";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductSchema } from "../validation/product.validation";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormProduct>({
    resolver: zodResolver(addProductSchema),
  });
  const [imgs, setImgs] = useState<FileList>();
  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data: TFormProduct) => {
    const refinedData: TFormProduct = {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price as string),
      stock: parseFloat(data.stock as string),
      category: data.category,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(refinedData));

    if (imgs) {
      for (let i = 0; i < imgs?.length; i++) {
        formData.append("images", imgs[i]);
      }
    }

    const response = await addProduct(formData).unwrap();

    if (!response?.success) {
      toast.error("Failed to add product to the database.");
    }

    toast.success("Sucessfully added product in the database.");
  };

  const handelImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = e.target.files;
    if (imgFiles) setImgs(imgFiles);
  };

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <p className="font-bold text-xl md:text-2xl lg:text-4xl">
          Add A Product
        </p>
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
                onClick={() => setImgs(undefined)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-100/10"
              >
                <FaArrowRotateLeft />
              </button>
            </div>

            <div className="w-full relative flex flex-col sm:flex-row items-center gap-4 p-4 border border-dashed bg-gray-50 dark:bg-gray-700 border-brandBlue rounded-lg overflow-auto">
              {[imgs]?.map((img, idx) => {
                if (img && img?.length > 0) {
                  const images = [...Array(img.length)].map((_i, id) => (
                    <img
                      key={id}
                      src={URL.createObjectURL(img[id] as File)}
                      alt="product"
                      className="w-11/12 sm:w-32 object-cover"
                    />
                  ));
                  return <React.Fragment key={idx}>{images}</React.Fragment>;
                }
                return (
                  <p key={idx} className="text-center text-gray-500">
                    No file choosen.
                  </p>
                );
              })}
            </div>
          </div>
          {/* product name or title  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Product Name/Title</label>
            <input
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
              defaultValue={""}
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

          <button
            type="submit"
            className="w-full my-4 bg-brandBlue/80 text-white cursor-pointer hover:bg-brandBlue duration-300 py-2 px-8 rounded-full relative z-10 uppercase"
          >
            Add a product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
