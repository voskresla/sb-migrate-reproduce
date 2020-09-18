import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
export class Tag extends Vue {
	@Prop()
	whenDelete?: () => void

	public render() {
		return (
			<div
				class='tag'
			>
				{ this.$slots.default }
				{this.whenDelete && (
					<div
						class='delete'
						onClick={this.whenDelete}
						aria-label='Удалить тэг'
					>
						Icon
					</div>
				)}
			</div>
		)
	}
}
