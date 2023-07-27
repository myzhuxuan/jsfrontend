In this example, we have a simple HTML page that includes a "Front-End Performance Inspector" button. When the button is clicked, the inspectPage function is called. Inside this function, we use the performance.now() method to capture the current timestamp when the inspection starts. We then simulate a 2-second page load using setTimeout to mimic the loading and processing time of a real web page.

After the simulated page load, we calculate the load time by subtracting the start time from the current time using performance.now(). The result is displayed in the outputDiv element on the page.

