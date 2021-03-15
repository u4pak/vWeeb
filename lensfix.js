  pc.app.on('Map:Loaded', () => {
    const ingameOverlay = pc.app.getEntityFromIndex(
      '9fcdea8c-ee29-403e-8e5b-0eddd1e548f6'
    );
	if (ingameOverlay) {
      		const sniperLens = pc.app.getEntityFromIndex(
        	'b655ed04-9844-4957-a03c-1756b25bda05'
      		);
      		sniperLens.enabled = false;
		console.clear(true);
		console.log("Worked");
	}
});