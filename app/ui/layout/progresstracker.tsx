

const ProgressTracker = ({ progress }: {progress: number}) => {
  const numBoxes = 10;

  // Calculate the number of filled boxes based on the progress
  const filledBoxes = Math.ceil((progress / 100) * numBoxes);

  // Generate an array of box elements with appropriate styling
  const boxes = Array.from({ length: numBoxes }, (_, index) => {
    const isFilled = index < filledBoxes;
    const boxColor = isFilled ? 'bg-white' : 'bg-transparent';
    return (
      <div
        key={index}
        className={`w-5 h-5 border border-white ${boxColor}`}
      ></div>
    );
  });

  return (
    <div className="flex items-center justify-around">
      {boxes}
    </div>
  );
};

export default ProgressTracker;
