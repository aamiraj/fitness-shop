const AddProduct = () => {
  return (
    <div className="py-4 lg:p-8">
      <div className="container">
        <p className="font-bold text-xl md:text-2xl lg:text-4xl">
          Add A Product
        </p>
        <form className="max-w-[1024px] mx-auto p-4 flex flex-col gap-4">
          {/* product images  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="images">Product Images</label>
            <input
              type="file"
              name="images"
              id="images"
              accept=".png, .jpg, .jpeg, .webp"
              multiple={true}
              className="w-max px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 rounded-lg"
            />
            <div className="w-full h-32 p-4 border border-dashed bg-gray-50 dark:bg-gray-700 border-brandBlue rounded-lg">

            </div>
          </div>
          {/* product name or title  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Product Name/Title</label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            />
          </div>
          {/* product description  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Product Description</label>
            <textarea
              name="description"
              id="description"
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            ></textarea>
          </div>
          {/* product price  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              min={0}
              step={0.01}
              name="price"
              id="price"
              onWheel={(e) =>
                e.target instanceof HTMLInputElement && e.target.blur()
              }
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            />
          </div>
          {/* stock of the product  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="stock">Product Stock</label>
            <input
              type="number"
              min={0}
              step={1}
              name="stock"
              id="stock"
              onWheel={(e) =>
                e.target instanceof HTMLInputElement && e.target.blur()
              }
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            />
          </div>
          {/* category of product  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Product Category</label>
            <input
              type="text"
              name="category"
              id="category"
              className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
            />
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
