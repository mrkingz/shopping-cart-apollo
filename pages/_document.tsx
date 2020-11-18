import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class CadawadaApp extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="robots" content="all" />
					<meta
						name="Description"
						content="Simple shopping cart implementation"
					/>
				</Head>
				<body className="fade-in">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
