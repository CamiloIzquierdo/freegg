import Slider from "react-slick";

interface Props {
    data: Array<{ id: number; image: string }>;
}
export const GameImages: React.FC<Props> = ({ data }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Slider
            {...settings}
            className="flex 2xl:w-[780px] xl:w-[700px] w-full"
        >
            {data.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt="" className="w-full" />
                </div>
            ))}
        </Slider>
    );
};
