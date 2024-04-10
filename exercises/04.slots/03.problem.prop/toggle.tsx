import { useId, useState } from 'react'
import { SlotContext } from './slots'

export function Toggle({
	id,
	children,
}: {
	id?: string
	children: React.ReactNode
}) {
	const [on, setOn] = useState(false)
	const generatedId = useId()
	id ??= generatedId

	const toggle = () => setOn(!on)

	const slots = {
		label: { htmlFor: id },
		// 🐨 add slots for onText (hidden prop), offText (hidden prop),
		// and switch (id, on, onClick props)
		onText: { hidden: !on },
		offText: { hidden: on },
		switch: { id, on, onClick: toggle },
	}

	return (
		<SlotContext.Provider value={slots}>
			{children}
		</SlotContext.Provider>
	)
}

