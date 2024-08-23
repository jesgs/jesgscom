import React, { useRef } from 'react';
import ScrollBlock from './components/ScrollBlock.js';

const App = () => {
	const circOneRef = useRef();
	const circTwoRef = useRef();
	const contact = useRef();
	const learnMore = useRef();
	const blockOne = useRef();
	const blockTwo = useRef();
	const handleAnimations = () => {
		let scrollVal = window.scrollY;
		if (
			circOneRef.current &&
			circTwoRef.current &&
			contact.current &&
			learnMore.current
		) {
			circOneRef.current.style.clipPath = `circle(${
				150 + scrollVal * 2
			}px at 0 0)`;
			circTwoRef.current.style.clipPath = `circle(${
				150 + scrollVal * 2
			}px at 100% 100%)`;
			contact.current.style.transform = `translate(50%, ${
				50 + scrollVal / 2
			}%)`;
			learnMore.current.style.transform = `translate(${
				-50 - scrollVal / 2
			}%, -50% )`;
		}
		if (blockOne.current) {
			blockOne.current.style.transform = `translate(${
				-50 - scrollVal / 2
			}px, 0%)`;
		}
        if(blockTwo.current) {
            blockTwo.current.style.transform = `translate(${-50 - scrollVal / 2}px, 0%)`;
        }
	};
	return (
		<ScrollBlock
			runAnimations={handleAnimations}
			secondComp={
				<div
					class='block one'
					ref={blockOne}
				>
					<img
						className='jegs-logo'
						alt=''
						src='./assets/images/logo.png'
					/>
					<h2>Who we are</h2>
					<p>
						Women, and Neurodivergent owned and operated. We bring
						your unique vision to life, and empower your brand to
						acheieve the greatest heights.
					</p>
					<p>
						We specialize not only in custom web development, but
						also SEO, Core Web Vitals, and Accessibility.
					</p>
					<button
						id='contact'
						ref={contact}
						onClick={(e) => {
							window.location = 'mailto:hello@jesgs.com';
							e.preventDefault();
						}}
					>
						Contact us
						<div class='AppButton-arrowWrap'>
							<span
								className='AppSvg AppButton-svg'
								style={{
									translate: 'none',
									rotate: 'none',
									scale: 'none',
									transform: 'translate3d(-100%, 100%, 0px)',
								}}
							>
								<svg
									width='19'
									height='19'
									viewBox='0 0 19 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z'
										fill='inherit'
									></path>
								</svg>
							</span>
						</div>
					</button>
				</div>
			}
			thirdComp={
				<div
					class='block two'
					ref={blockTwo}
				>
					<img
						className='jegs-logo'
						alt=''
						src='./assets/images/logo.png'
					/>
					<h2>What we do</h2>
					<ul>
						<li>Custom development</li>
						<li>Custom Block Themes</li>
						<li>Custom Classic Themes</li>
						<li>Custom Plugins</li>
						<li>
							Web Design: websites, e-commerce help, and more!
						</li>
						<li>Web Develpment: Animations, forms, and more!</li>
					</ul>
					<button
						id='contact'
						ref={contact}
						onClick={(e) => {
							window.location = 'mailto:hello@jesgs.com';
							e.preventDefault();
						}}
					>
						Contact us
						<div class='AppButton-arrowWrap'>
							<span
								className='AppSvg AppButton-svg'
								style={{
									translate: 'none',
									rotate: 'none',
									scale: 'none',
									transform: 'translate3d(-100%, 100%, 0px)',
								}}
							>
								<svg
									width='19'
									height='19'
									viewBox='0 0 19 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z'
										fill='inherit'
									></path>
								</svg>
							</span>
						</div>
					</button>
				</div>
			}
		>
			<img
				className='jegs-logo'
				alt=''
				src='./assets/images/logo.png'
			/>
			<h1>Jesgs Interactive</h1>
			<div
				ref={circOneRef}
				className='circle1'
			>
				<h2>Web</h2>
				<button
					id='contact'
					ref={contact}
					onClick={(e) => {
						window.location = 'mailto:hello@jesgs.com';
						e.preventDefault();
					}}
				>
					Contact us
					<div class='AppButton-arrowWrap'>
						<span
							className='AppSvg AppButton-svg'
							style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: 'translate3d(-100%, 100%, 0px)',
							}}
						>
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z'
									fill='inherit'
								></path>
							</svg>
						</span>
					</div>
				</button>
			</div>
			<div
				ref={circTwoRef}
				className='circle2'
			>
				<h2>Development</h2>
				<div
					id='learn-more'
					ref={learnMore}
				>
					<p>Learn More</p>
					<div class='AppButton-arrowWrap'>
						<span
							className='AppSvg AppButton-svg'
							style={{
								translate: 'none',
								rotate: 'none',
								scale: 'none',
								transform: 'translate3d(-100%, 100%, 0px)',
							}}
						>
							<svg
								style={{ rotate: '140deg' }}
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z'
									fill='inherit'
								></path>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</ScrollBlock>
	);
};

export default App;
