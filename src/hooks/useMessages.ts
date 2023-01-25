import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import MailService from "../services/mailSevice";

export default function useMessages(name: string) {
  const { data } = useQuery(
    ["messages"],
    async () => {
      if (name) {
        const { data } = await MailService.getMessages(name);
        return data?.messages;
      }
    },
    { keepPreviousData: true, enabled: !!name, refetchInterval: 1000 }
  );
  return { messages: data || [] };
}
