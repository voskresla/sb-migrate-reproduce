import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import { Tag } from '.'

const stories = storiesOf('Tag', module)

stories.addDecorator(withKnobs)

@Component
class TagStory extends Vue {
	render() {
		return (
			<div style={{ padding: '5%' }}>
				<Tag
					whenDelete={() => ''}
				>
					Ozon.Card
				</Tag>
			</div>
		)
	}
}

// TODO: <TYPES> add VueClass to story.add params
// @ts-ignore
stories.add('Tag', () => TagStory)
