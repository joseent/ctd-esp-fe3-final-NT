"use client";

import { Comics } from 'interface/character';
import { useState, useEffect } from 'react';
import { Spinner } from './ui/spinner';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { ComicCard } from './ui/comicCard';
// import { getComicsByPage } from 'dh-marvel/services/comics/comic.service';



export const LoadMore = () => {
    const [comics, setComics] = useState<Comics[]>([]);
    const [pagesLoaded, setPagesLoaded] = useState(1);
    const [isEndOfPage, setIsEndOfPage] = useState(false);

    const loadMoreComics = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const nextPage = pagesLoaded + 1;
        const newComics = await getComics(nextPage,12) ?? []
        setComics((prevComics: Comics[])=> [...prevComics, ...newComics]) 
        setPagesLoaded(nextPage)
    }


    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
      
        if (windowHeight + scrollTop >= documentHeight - 100) {
          setIsEndOfPage(true);
        } else {
          setIsEndOfPage(false);
        }
      };


      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        if (isEndOfPage) {
            console.log("in file end");
            loadMoreComics();
          // Realiza acciones cuando llegues al final de la página
        //   loadMoreContent(); // Reemplaza con tu lógica de carga de contenido
        }
      }, [isEndOfPage]);
  return (
    <div>
        <ComicCard comicsArr={comics}/>
        <Spinner/>
    </div>
  )
}
