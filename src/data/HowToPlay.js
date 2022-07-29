import React, { Fragment } from 'react';

const howTos = [
	{
		id: 0,
		alt: "Step 1",
		text: (
			<Fragment>
				<p className="how-to-item-text">A Windows, Linux or Mac computer that meets <a href="https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-system-requirements" target="_blank" rel="noopener noreferrer">requirements</a></p>
			</Fragment>
		)
	},
	{
		id: 1,
		alt: "Step 2",
		text: (
			<Fragment>
				<p className="how-to-item-text"><a href="https://www.minecraft.net/en-us/store/minecraft-java-edition/" target="_blank" rel="noopener noreferrer">Minecraft Java Edition</a></p>
			</Fragment>
		)
	},
	{
		id: 2,
		alt: "Step 3",
		text: (
			<Fragment>
				<p className="how-to-item-text">A Minecraft account</p>
			</Fragment>
		)
	}
]

export default howTos;