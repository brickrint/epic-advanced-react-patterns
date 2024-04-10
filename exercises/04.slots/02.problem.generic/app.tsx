import { useId } from 'react'
import { Input, Label } from './slots'
import { TextField } from './text-field'
import { Toggle, ToggleButton, ToggleOff, ToggleOn } from './toggle'

export function App() {
	return (
		<div>
			<div>
				<Toggle id="myID">
					{/* 🐨 switch this label for the Label component from ./slots.tsx */}
					<Label>Party mode</Label>
					{/* 🐨 remove this id prop */}
					<ToggleButton />
					<ToggleOn>Let's party 🥳</ToggleOn>
					<ToggleOff>Sad town 😭</ToggleOff>
				</Toggle>
			</div>
			<hr />
			<div>
				<TextField>
					<Label>Venue</Label>
					<Input />
				</TextField>
			</div>
		</div>
	)
}
