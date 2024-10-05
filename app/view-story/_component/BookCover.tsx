function BookCover({ storyTitle }: { storyTitle: string }) {
  return (
    <div className="bg-primary flex justify-center items-center h-[500px]">
      <h2 className="text-white text-4xl font-bold text-center">
        {storyTitle}
      </h2>
    </div>
  );
}

export default BookCover;
