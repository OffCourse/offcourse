export const decksNotFull = ({ decks }: any, event: any) => {
  const emptyDecks = decks.filter(({ ref }: any) => ref.state.value === "empty");
  return emptyDecks.length > 0;
};
