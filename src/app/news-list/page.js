import Layout from "@/components/layout/Layout";
import NewsList from './../../components/layout/NewsList';
import { News } from '@/app/home/components/News';
import NewsCard from "@/components/UI/NewsCard";
import Link from "next/link";


export const metadata = {
    title: "News",
    description: "News list page",
  };

async function getData() {
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=perpage');

    return res.json();
}

export default async function NewsList() {
    let newsItems = await getData();

    return (
        <>
            <Layout>
                <section className="news-list-section mb-10">
                    <div className="container mx-auto mt-5">
                        <div className="text-sm breadcrumbs mb-3">
                            <ul>
                                <li><Link href={"/"}>Home</Link></li>
                                <li>News</li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {newsItems.map((newsItem, index) => (
                                <NewsCard
                                key={`news-${index}`}
                                article_id={newsItem.article_id}
                                image_url={newsItem.image_url}
                                title={newsItem.title}
                                pubDate={newsItem.pubDate}
                                description={newsItem.description}

                                />
                            ))}
                        </div>

                        <div className="flex justify-center mt-8 mb-5">
                            <div className="flex gap-3">
                                <a className="btn btn-primary px-10">Previous</a>
                                <Link href="/blog-list" className="btn btn-primary px-10">Next</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}