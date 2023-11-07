// - Font size: 15px

function App() {
	return (
		<main className="flex h-screen justify-center items-center">
			<article className="max-w-7xl md:w-2/3 flex flex-col md:flex-row-reverse text-white w-3/4 bg-primary-darkDesaturatedBlue rounded-lg">
				<div className="relative">
					<div className="absolute inset-0 bg-primary-softViolet opacity-70 brightness-50"></div>
					<img
						src="/images/image-header-desktop.jpg"
						alt=""
						className="hidden md:block"
					/>
					<img
						src="/images/image-header-mobile.jpg"
						alt=""
						className="rounded-lg md:hidden"
					/>
				</div>
				<div className="md:pr-12 md:w-1/2 flex flex-col items-center text-center justify-center px-6 pt-8">
					<div className="text-3xl font-lexendDeca md:text-left">
						Get <span className="text-primary-softViolet">insights</span> that
						help your business grow.
					</div>
					<p className="md:text-left pt-6 px-1 font-inter text-neutral-slightlyTransparentWhiteStatHeadings">
						Discover the benefits of data analytics and make better decisions
						regarding revenue, customer experience, and overall efficiency.
					</p>
					<ul className="py-10 flex flex-col gap-9 md:flex-row">
						<li>
							<p className="text-2xl font-inter font-bold">10k+</p>
							<span className="uppercase text-xs tracking-widest font-bold text-neutral-slightlyTransparentWhiteStatHeadings">
								companies
							</span>
						</li>
						<li>
							<p className="text-2xl font-inter font-bold">314</p>
							<span className="uppercase text-xs tracking-widest font-bold text-neutral-slightlyTransparentWhiteStatHeadings">
								templates
							</span>
						</li>
						<li>
							<p className="text-2xl font-inter font-bold">12M+</p>
							<span className="uppercase text-xs tracking-widest font-bold text-neutral-slightlyTransparentWhiteStatHeadings">
								queries
							</span>
						</li>
					</ul>
				</div>
			</article>
		</main>
	);
}

export default App;
