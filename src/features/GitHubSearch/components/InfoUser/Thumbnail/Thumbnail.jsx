import React from 'react';
import './style.scss';

const URL_IMAGE_DEFAULT =
	'https://s3-alpha-sig.figma.com/img/7342/874e/66253257e7944d0a8daa4ffd93505228?Expires=1638144000&Signature=Ng-YmkWhwovCg3LEpF~89ubZu2wBuo2SXSfy9KxOK06A6Ze6ho07zbYbcIBT9KbpFotfgRTkrGC2CG7P~I1EobK-uzOU9QeFgG9LqgJ3HB-875BqJB0b7~-zr1uZHyB~QXa-jmfR2bvBlc57v8EMaoZoyJLRkiZSAbWIrHUYZW257rTpFpOCdnpTpjio0Y0GfljDcNjEBdnnSnpZCYA7lF3lVDIG3RknUsQo5p8ynr2AWm5MLByc2BPzEgQrwnezz5g9gUoJczco8O~15Cir66AgNOxOnmhom7Xr19FGidMNdlG1C6sYuXqIkSlicqySHYzr4ztbzNTfeHKT99Sd4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
function Thumbnail({ thumbnail }) {
	return (
		<div className='thumbnail-img'>
			<img
				className='image'
				src={thumbnail ? thumbnail : URL_IMAGE_DEFAULT}
				alt=''
			/>
		</div>
	);
}

export default Thumbnail;
