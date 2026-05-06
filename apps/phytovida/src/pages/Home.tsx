


export default function Home() {


	return (
		<section className="w-full space-y-10  md:mt-32">
			<div className="h-full grid max-w-5xl mx-auto w-full flex flex-col gap-10">
				<h1 className="flex text-center text-headline md:text-8xl">
					Now Every Plant Can Thrive
				</h1>

				<div className="relative flex justify-center">

					<div className="bg-accent2 absolute inset-y-0 left-0 right-0 top-[30%] rounded-3xl"></div>
					<img
						src="/homepage_plant.jpeg"
						alt="Two dark green leaves against a grey background"
						className="relative rounded-t-3xl w-[75%] object-cover border-t-9 border-l-9 border-r-9 border-black" />

				</div>

				<div className="flex flex-col gap-4 py-10">

					<h2 className="text-accent6 text-2xl max-w-xl"></h2>
					<p className="text-accent2">How it works</p>
					<h3 className="text-4xl max-w-xl">Healthy plants start here</h3>

				</div>
				<div className="grid grid-col-2 md:grid-cols-4 gap-4">
					<div>
						<h4 className="py-4">Track your plants</h4>
						<p>Add plants from our library to your garden to track what you're growing and what you want to grow next.</p>
					</div>
					<div>
						<h4 className="py-4">Schedule your watering</h4>
						<p>Set watering frequency for each plant and add reminders so you'll never forget to water your plants again.</p>
					</div>
					<div>
						<h4 className="py-4">Check plant health</h4>
						<p>Upload a photo of your plant to get an instant AI diagnosis and discover treatment suggestions</p>
					</div>
					<div>
						<h4 className="py-4">Get inspiration</h4>
						<p>Browse our plant library for information on your favourite plants and inspiration on what to grow next.</p>
					</div>
				</div>

				<div className="flex flex-col items-center gap-4 py-20">
					<h2 className="text-center text-5xl">Ask AI</h2>
					<p>Get instant AI-powered help to diagnose common pests and diseases.</p>
				</div>

				<div>
					<img
						src="/homepage_plant.jpeg"
						alt="Two dark green leaves against a grey background"
						className="rounded-t-3xl object-cover" />

				</div>

			</div>

		</section>

	);

}