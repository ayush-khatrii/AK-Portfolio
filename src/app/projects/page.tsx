"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { project } from "@/constants";
import { motion } from "framer-motion";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Page = () => {
	return (
		<section className="py-5 md:py-10">
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.09 }}
				className="text-xl md:text-3xl font-bold mb-10"
			>
				All Projects
			</motion.h1>
			<div className="grid grid-cols-1 gap-4">
				{project.map((item, idx) => (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: idx * 0.2 }}
						key={idx}
						className="rounded-md overflow-hidden border border-foreground/15 flex flex-col"
					>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: idx * 0.2 }}
							key={idx}
						>
							<Card className="flex flex-col h-full border-foreground/15">

								<CardHeader className="pb-2">
									<h2 className="text-xl font-medium">
										{item.title}
									</h2>
								</CardHeader>

								<CardContent className="flex flex-col flex-grow pt-0">
									<p className="text-lg line-clamp-2 font-normal text-muted-foreground mb-6">
										{item.desc}
									</p>

									<div className="flex flex-wrap gap-2 mb-6">
										{item.techStack?.map((tech, techIdx) => (
											<motion.div
												key={techIdx}
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: techIdx * 0.1 }}
											>
												<Badge variant="secondary" className="text-base border text-foreground/85">
													{tech}
												</Badge>
											</motion.div>
										))}
									</div>
								</CardContent>

								<CardFooter className="gap-3 pt-0">
									{item.liveLink && (
										<Button variant="outline" size="sm" asChild>
											<a href={item.liveLink} target="_blank" rel="noopener noreferrer">
												<FiLink className="h-4 w-4" />
												Website
											</a>
										</Button>
									)}
									{item.githubLink && (
										<Button variant="default" size="sm" asChild>
											<a href={item.githubLink} target="_blank" rel="noopener noreferrer">
												<FaGithub className="h-4 w-4" />
												Source
											</a>
										</Button>
									)}
								</CardFooter>

							</Card>
						</motion.div>
					</motion.div>
				))}
			</div>
		</section >
	);
};

export default Page;
