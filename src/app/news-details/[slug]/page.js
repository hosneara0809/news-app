import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
    title: "News",
    description: "NewsList page",
  };

async function getData(slug) {
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa' + slug);

    return res.json();
}

export default async function NewsDetails({params}) {
    let news = await getData(params.slug);

    return (
        <>
            <Layout>
                <section className="newsdetails-section mb-10">
                    <div className="container mx-auto mt-5">
                        <div className="text-sm breadcrumbs mb-3">
                            <ul>
                                <li><Link href={"/"}>Home</Link></li>
                                <li>News Details</li>
                            </ul>
                        </div>

                            <div>
                            <div className="mb-3">
                                <img src={news.image-url} width="100%" height={450} />
                            </div>
                            <div className="card-title mb-2">{news.title}</div>
                            <div className="mb-3">
                                <img src={news.image-url} width="100%" height={450} />
                            </div>
                            </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}