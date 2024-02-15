import { Suspense } from 'react'
// import Loading from './loading.tsx';
import Link from "next/link";
export default async function newsList(){

    const response = await fetch("http://kku.aaa:81/ar/api/v1/news", {
        next:{ revalidate: 20 },
        
    });
    const getNews = await response.json();
    const newsList = getNews.map((news: any) => {
        return (
            <section className="components-news d-flex col-5 offset-1 flex-column" key={news.nid} >
                    <h4>{news.title}</h4>     
                    <Link href={`/news/${news.nid}`}>Link</Link>      
                    {/* <Suspense fallback={<Loading />}> */}
                        <img className='col-6' src={`${news.image_large}`} alt="kku" />
                    {/* </Suspense>                                                                                   */}
            </section>		
        );
    });

    
    
    return(
        <div  className="d-flex flex-column flex-wrap container">
            <h1 style={{fontSize:"30px",display:"flex",color:"red"}}>
                List News 
            </h1>
            <div  className="d-flex flex-row flex-wrap  col">
                {newsList} 
            </div>
        </div>
    );
    
    }