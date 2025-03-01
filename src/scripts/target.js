export const calculateTargetMovement = (houseRef, canvasRef, index) => {
  if (!houseRef.value || !canvasRef.value) return null;

  const houseElement = houseRef.value.$el || houseRef.value;
  const houseRect = houseElement.getBoundingClientRect();
  const canvasElement = canvasRef.value;
  const canvasRect = canvasElement.getBoundingClientRect();

  const targetElements = document.querySelectorAll('.target');
  const targetElement = targetElements[index];
  if (!targetElement) return null;
  const targetRect = targetElement.getBoundingClientRect();

  const deltaX = houseRect.left - targetRect.left;
  const deltaY = houseRect.top - targetRect.top;

  return { deltaX, deltaY, canvasRect };
};

export const applyTargetMovement = (target, movement) => {
  const { deltaX, deltaY, canvasRect } = movement;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const duration = distance / 200;

  target.position.x += (deltaX / canvasRect.width) * 100;
  target.position.y += (deltaY / canvasRect.height) * 100;

  target.scale = 0;
  target.transitionDuration = `${duration}s`;

  return duration;
};
