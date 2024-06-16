"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import Logo from "@assets/images/logo.svg";
import { pages } from "@data/routes";

import Link from "next/link";
import { MenuButton } from "../MenuButton";
import styles from "./Header.module.css";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsOpen(true);
			} else {
				setIsOpen(false);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className={styles.header}>
			<Image src={Logo} alt="logo" className={styles.Logo} />
			<MenuButton setIsOpen={setIsOpen} />
			{isOpen && (
				<div className={styles.input}>
					{pages.map((page, index) => (
						// <button className={styles.value} key={index}>
						<Link className={styles.value} key={index} href={page.url}>
							{page.name}
						</Link>
						// </button>
					))}
				</div>
			)}
		</header>
	);
};
