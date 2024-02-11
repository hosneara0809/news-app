import NewsCard from "../UI/NewsCard";


async function getData () {
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=technology');

    return res.json();
}

const NewsList = async () => {


    let newsListData = await getData();

    let newsItems = newsListData.results;


    return(
        <div>
            <section className="news-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="text-center text-5xl font-bold mb-16 text-blue-600">News</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                            newsItems.map((newsItem,index) => (
                                <NewsCard   
                                key={`news-${index}`}  
                                Category={newsItem.category}
                                image={newsItem.image_Url}   
                                title={newsItem.title}  
                                link={newsItem.link}
                                description={newsItem.description}       
                                />
           
                            ))}
                        </div>
                </div>

            </section>
        </div>
    );
};

export default NewsList ;