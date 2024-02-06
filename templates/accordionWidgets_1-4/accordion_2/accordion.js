import $ from 'jquery';

const selectors = {
	container: ".js-toggle-container",
	item: ".js-toggle-item",
	button: ".js-toggle-button",
	content: ".js-toggle-content"
};

const attributes = {
	accordionMode: "data-accordion-mode"
};

const modifiers = {
	active: "active"
};

const accordionModes = {
	single: "single",
	multiple: "multiple"
};

export default function Accordion () {
	const $container = $(selectors.container);
	const $button = $(selectors.button);

	if (!$button.length) {
		return null;
	}

	if ($container.length) {
		$container.on("click", selectors.button, toggleAccordion);
	} else {
		$button.on("click", toggleAccordion);
	}

	function toggleAccordion() {
		let $accordion = $(this).parent(selectors.item);

		let accordionContent = $accordion[0].querySelector(selectors.content);

		if (!accordionContent) {
			return null;
		}

		let $accordionContainer = $accordion.parents(selectors.container);

		if ($accordionContainer.length) {
			let accordionMode = $accordionContainer.attr(
				attributes.accordionMode
			);

			if (accordionMode === accordionModes.single) {
				let $openAccordions = $accordionContainer
					.find(`${selectors.item}.${modifiers.active}`)
					.filter(function (index, el) {
						return el !== $accordion[0];
					});

				$openAccordions.removeClass(modifiers.active);

				$openAccordions
					.find(selectors.content)
					.stop()
					.slideToggle(250, function () {
						$(this).css("height", "");
					});
			}
		}

		$accordion.toggleClass(modifiers.active);

		$(accordionContent)
			.stop()
			.slideToggle(250, function () {
				$(this).css("height", "");
			});
	}
};
