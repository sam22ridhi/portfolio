import React from "react";
import "./about.scss";
import avatar from "../../../assets/images/baseImages/default_avatar.svg";
import user from "../../../utils/data/user.config";

function Experience() {
	return (
		<div>
			{user.experiences.map((experience, index) => {
				return (
					<div className="uk-width-1-1 uk-padding">
						<div className="uk-flex">
							<img
								className="uk-border-circle"
								width="50"
								height="50"
								src={
									experience.organizationPicture !=
										undefined &&
									experience.organizationPicture != null &&
									experience.organizationPicture != ""
										? experience.organizationPicture
										: avatar
								}
								alt="org"
							/>
							<h3 className="uk-text-large uk-margin-small-left font-color-white">
								{experience.organization}
							</h3>
						</div>

						<div className="container uk-margin-medium-left">
							{experience.positions.map((position, posIndex) => {
								return (
									<div className="timeline-block ">
										<div className="marker"></div>
										<div className="timeline-content">
											<p className="uk-text-lead font-color-white">
												{position.positionName}
											</p>
											<span>
												{position.startDate} -
												{position.endDate}
											</span>
											<p className="positon-desc">
												{position.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Experience;
