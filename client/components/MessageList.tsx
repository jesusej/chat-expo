import { FlatList, type ListRenderItem } from "react-native";
import { useCallback } from "react";
import Message from "./Message";

const messages: MessageData[] = [
  {
    id: "1",
    author: "earnaut0",
    me: false,
    type: "image/png",
    value: "diam erat fermentum justo",
  },
  {
    id: "2",
    author: "rfrancescuzzi1",
    me: true,
    type: "audio/mpeg3",
    value: "magna vestibulum aliquet",
  },
  {
    id: "3",
    author: "khold2",
    me: true,
    type: "application/pdf",
    value: "erat",
  },
  {
    id: "4",
    author: "eprickett3",
    me: false,
    type: "text/plain",
    value: "quam turpis adipiscing lorem",
  },
  {
    id: "5",
    author: "randraud4",
    me: false,
    type: "audio/mpeg3",
    value: "leo pellentesque",
  },
  {
    id: "6",
    author: "hpetr5",
    me: true,
    type: "video/avi",
    value: "feugiat non pretium",
  },
  {
    id: "7",
    author: "ecarrel6",
    me: false,
    type: "image/gif",
    value: "lacus morbi quis tortor",
  },
  {
    id: "8",
    author: "hcasier7",
    me: false,
    type: "application/mspowerpoint",
    value: "ac tellus semper interdum mauris",
  },
  {
    id: "9",
    author: "tclemmens8",
    me: true,
    type: "application/pdf",
    value: "ut suscipit a feugiat et",
  },
  {
    id: "10",
    author: "bwarrier9",
    me: false,
    type: "application/x-mspowerpoint",
    value: "ac enim in tempor",
  },
];

export default function MessageList() {
  const _renderItem: ListRenderItem<MessageData> = useCallback(
    ({ item }) => <Message {...item} />,
    [],
  );

  return (
    <FlatList
      contentContainerClassName="flex-grow"
      data={messages}
      renderItem={_renderItem}
      keyExtractor={({ id }) => id}
    />
  );
}
