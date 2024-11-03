import { Box } from '@mui/material';
import React from 'react';
import binimise1 from '../../../assets/images/BINIMISE1.png';
import PMS from '../../../assets/images/PMS.png';
import GSS from '../../../assets/images/Dashboard.png';
import SMARTKEY from '../../../assets/images/SMARTKEY.png';
import SimpleImageSlider from 'react-simple-image-slider';

export default function Slider() {
	const images = [
		{ id: 1, url: binimise1 },
		{ id: 2, url: PMS },
		{ id: 1, url: GSS },
		{ id: 1, url: SMARTKEY },
	];
	return (
		<Box width={'100%'}>
			<SimpleImageSlider
				width={800}
				height={500}
				images={images}
				showBullets={false}
				showNavs={false}
                loop={true}
                autoPlay={true}
			/>
			{/* {images.map((image) => (
				<Box key={image.id} width={'100%'}>
					<img src={image.image} alt={`image${image.id}`} width={'100%'} height={'500px'}/>
				</Box>
			))} */}
		</Box>
	);
}
