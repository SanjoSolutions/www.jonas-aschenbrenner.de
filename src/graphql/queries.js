/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
      id
      by
      message
      chatID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        by
        message
        chatID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatMessagesByChatID = /* GraphQL */ `
  query ChatMessagesByChatID(
    $chatID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatMessagesByChatID(
      chatID: $chatID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        by
        message
        chatID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
