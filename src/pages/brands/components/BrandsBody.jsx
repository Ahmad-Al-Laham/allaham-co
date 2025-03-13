import React from 'react'
import { useGetActiveBrandsQuery } from '../../../redux/brands/brandSlice'
import { useTranslation } from 'react-i18next'
const BrandsBody = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(12);
     const [
        getActiveBrands,
        { data, isSuccess, isLoading, isFetching, isError },
      ] = useGetActiveBrandsQuery();  
        useEffect(() => {
          if (search) {
            getActiveBrands({
              page: currentPage,
              limit: itemsPerPage,
              searchTerm: search,
            });
          } else if (
            type ||
            category ||
            brand ||
            texture 
          ) {
            getActiveBrands({
              brandId: 
              brand == "all" || typeof brand !== "string" ? "" : brand,

              page: currentPage,
              limit: itemsPerPage,

            });
          } else {
            getActiveBrands({
              page: currentPage,
              limit: itemsPerPage,
            });
          }
        }, [brand]);
      
  return (
    isLoading || isFetching ? (
        <div className="py-44 flex justify-center items-center relative">
          <Loader />
        </div>
      ) : isError ? (
        <div className=" py-44 flex justify-center items-center text-center">
          <p className="text-big font-semibold">{t("errorMsg")}</p>
        </div>
      ) : isSuccess && data.ids.length == 0 ? (
        <div className=" py-44 flex justify-center items-center text-center">
          <p className="text-big font-semibold">{t("noBrandsgetActiveBrandsMsg")}</p>
        </div>
      ) : (
        isSuccess && (
                <div className='grid grid-cols-2 sm:grid-cols-4'> 
                     {data.ids.map((item, index) => {
                                return (
                                  <div key={index} className="cursor-pointer">
                                      <div className="bg-white w-full h-full   p-[10px]  overflow-hidden">
                                        <img
                                          divStyle={"!h-full !w-full"}
                                          alt={data.entities[item].nameEn}
                                          src={API_BASE_URL + data.entities[item].images[0]?.url}
                                          className="!h-full !w-full object-center object-cover"
                                        />
                                      </div>
                                   
                                    <div
                                      dir={i18n.language == "en" ? "ltr" : "rtl"}
                                      className="px-2  flex justify-between  items-center"
                                    >
                                      <p className="text-small font-bold">
                                        {i18n.language == "en"
                                          ? data.entities[item].nameEn
                                          : data.entities[item].nameAr}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                </div>

        )
  )
)}


export default BrandsBody
