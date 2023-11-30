import { useInfiniteQuery } from "@tanstack/react-query";
import Container from "../../components/Shared/Container/Container";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import InfiniteScroll from "react-infinite-scroll-component";

const getImages = async ({ pageParam = 0 }) => {
  const { data } = await axiosPublic.get(
    `/images?limit=10&offset=${pageParam}`
  );
  // console.log(data);
  return { ...data, prevOffset: pageParam };
};

const Gallery = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: getImages,
    getNextPageParam: lastPage => {
      if (lastPage.prevOffset + 12 > lastPage.articlesCount) {
        // Stop infinite loop when all images are shown
        return null;
      }
      return lastPage.prevOffset + 12;
    },
  });
  // console.log(data?.pages);
  const images = data?.pages.reduce((acc, page) => {
    const imagesArray = Object.values(page).flatMap(obj => obj.images || []);

    return acc.concat(imagesArray);
  }, []);
  // console.log(images);
  return (
    <Container>
      <div className='sticky bg-fixed bg-[#526D82] py-10 top-0 z-50 text-center text-3xl font-bold overflow-hidden text-white'>
        Image Gallery
      </div>
      <div className='sticky top-20  '>
        <InfiniteScroll
          dataLength={images ? images.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loading={<div>Loading...☝️</div>}
        >
          <div className='container mx-auto'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {images &&
                images.map((images, idx) => {
                  return (
                    <div className='' key={idx}>
                      <img
                        className='object-cover h-[350px] w-[600px]'
                        src={images}
                        alt=''
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </Container>
  );
};

export default Gallery;
