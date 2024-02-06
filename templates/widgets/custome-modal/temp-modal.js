import $ from 'jquery';
import modalFactory from '../../../assets/js/theme/global/modal';

export default function TempModalFactory (context = {}) {
	let $elements = $('.banner-js');

	if (!$elements.length) {
		return;
	}

	$elements.each(function (index, element){
		const id = $(element).attr("id")
		let content = $(element).find('.modal-content').children();
		let modal = modalFactory(`#${id}`, {}, 'temp-modal')[0]

		setTimeout(() => {
			modal.open();
			modal.updateContent(content)
		}, $(element).attr('data-timer'));
	})
};
