// Add all your JS here


function changeImageAndMessage() {
  const timeRange = document.getElementById("timeRange");
  const image = document.getElementById("image");
  const message = document.getElementById("message");
  const time = document.getElementById("time");

  const hour = parseInt(timeRange.value);
  let timeText = "";

  if (hour >= 0 && hour < 6) {
    image.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    message.textContent = "It's the quiet hours\nbefore dawn. Take a moment\nto appreciate the stillness.";
    timeText = "Time: 12 AM - 6 AM";
  } else if (hour >= 6 && hour < 12) {
    image.src = "https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    message.textContent = "The sun is rising,\nbringing new opportunities\nand endless possibilities.";
    timeText = "Time: 6 AM - 12 PM";
  } else if (hour >= 12 && hour < 17) {
    image.src = "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    message.textContent = "Embrace the afternoon\nwith enthusiasm and make\nthe most of every moment.";
    timeText = "Time: 12 PM - 5 PM";
  } else if (hour >= 17 && hour < 20) {
    image.src = "https://images.unsplash.com/photo-1430462708036-7ef5363d56d8?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    message.textContent = `The golden hour has narrived, casting a warm glow
    non everything around you.`;
    timeText = "Time: 5 PM - 8 PM";
  } else {
    image.src = "https://images.unsplash.com/photo-1532798369041-b33eb576ef16?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    message.textContent = `As the night falls let your worries 
    fade away\nand find serenity in the moonlight.`;
    timeText = "Time: 8 PM - 12 AM";
  }

  time.textContent = timeText;
}