import { useState, useEffect, FC } from "react";
import { Action, ActionPanel, Detail, List } from "@raycast/api";
import fetch from "node-fetch";
import { Routine } from "../interfaces/Routine";

interface DataFetcherProps {
  url: string;
  token: string;
}

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const DataFetcher: FC<DataFetcherProps> = (dataFetcherProps) => {
  const [dataState, setDataState] = useState<DataState>({
    data: "",
    loading: true,
    error: null
  });
  useEffect(() => {
    if (!dataFetcherProps.url) return;

    const fetchData = async () => {
      try {
        setDataState({ data: "", loading: true, error: null });
        const response = await fetch(dataFetcherProps.url, {
          headers: {
            "api-key": `${(dataFetcherProps.token)}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setDataState({ data: result, loading: false, error: null });
      } catch (err) {
        setDataState({
          data: "",
          loading: false,
          error: (err as Error).message
        });
      }
    };
    fetchData();
  }, [dataFetcherProps.url, dataFetcherProps.token]);


  if (dataState.loading) {
    return <Detail markdown="Loading..." />;
  }

  if (dataState.error) {
    return <Detail markdown="Error." />;
  }

  return (
    <List>
      {dataState.data.routines.map((routine: Routine, index: string) => (
        <List.Item id={index} key={routine.id} title={routine.title} />
        ))}
    </List>
  );
};

export default DataFetcher;
