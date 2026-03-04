import { useState, useEffect, useCallback } from "react";
import type { SiteData, Article, FeedItem, Project, Video } from "@/types";
import {
  preloadSiteData,
  getFeed,
  getArticles,
  getArticleById,
  getProjects,
  getVideos,
} from "./data";

export function useFeed() {
  const [data, setData] = useState<FeedItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    getFeed()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  return { data: data ?? [], isLoading: loading, error };
}

export function useArticles() {
  const [data, setData] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    getArticles()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  return { data: data ?? [], isLoading: loading, error };
}

export function useArticle(id: number) {
  const [data, setData] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const load = useCallback(() => {
    if (id <= 0) {
      setData(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    getArticleById(id)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);
  useEffect(() => {
    load();
  }, [load]);
  return { data, isLoading: loading, error, refetch: load };
}

export function useProjects() {
  const [data, setData] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    getProjects()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  return { data: data ?? [], isLoading: loading, error };
}

export function useVideos() {
  const [data, setData] = useState<Video[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    getVideos()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  return { data: data ?? [], isLoading: loading, error };
}

/** 预加载整站数据（用于 App 根组件，便于各页共享一次请求） */
export function usePreloadSiteData() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    preloadSiteData().then(() => setReady(true));
  }, []);
  return ready;
}
