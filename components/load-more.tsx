"use client";

import { Comic } from 'interface/comic.type';
import { useState, useEffect } from 'react';
import { Spinner } from './ui/spinner';
import { ComicCard } from './ui/comicCard';
import { getComicsByPage } from 'dh-marvel/services/comic/comic.service';


export const LoadMore = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  const loadMoreComics = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const nextPage = pagesLoaded + 1;
    const newComics = await getComicsByPage(nextPage, 12) ?? []
    
    setComics((prevComics: Comic[]) => [...prevComics, ...newComics.data.results])
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
      loadMoreComics();

    }
  }, [isEndOfPage]);

  return (
    <>
      <ComicCard comicsArr={comics} />
      <Spinner />
    </>
  )
}
