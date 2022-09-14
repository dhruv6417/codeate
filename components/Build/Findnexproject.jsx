import React from 'react'
import styles from "../../styles/Build/Findnextproject.module.css"

const Findnexproject = () => {
    return (<div className={styles.Findnextproject}>
        <h1 className={styles.Projectbuild_head}>
            Find your Next Project
        </h1>
        <div className={styles.Projectbuild_body}>
            <div className={styles.Project_template}>
                <div className={styles.Project_lvl}>Begginer</div>
                <div className={styles.Project_content}>
                    Find a beginner level project for you. Which requires entry level skills and short time to complete.
                </div>
                <div className={styles.Progrct_link}>
                    <a href="/project_cat?level=Begginer"> Learn more </a>
                    <img
                        style={{ marginLeft: "15px" }}
                        src="/images/Build/smallarrow.png"
                    ></img>
                </div>
            </div>
            <div className={styles.Project_template}>
                <div className={styles.Project_lvl}>Intermediate</div>
                <div className={styles.Project_content}>
                    It's a mid skill project range where you can work on
                    a particular project for a long span of time individually
                    or in a team. It involves multi domain skills to get the
                    project done.
                </div>
                <div className={styles.Progrct_link}>
                    <a href="/project_cat?level=Intermediate"> Learn more </a>
                    <img
                        style={{ marginLeft: "15px" }}
                        src="/images/smallarrow.png"
                    ></img>
                </div>
            </div>
            <div className={styles.Project_template}>
                <div className={styles.Project_lvl}>Advanced</div>
                <div className={styles.Project_content}>
                    It's a whole team project, which directs towards solving
                    particular problems and developing an MVP As an innovative solution.
                    Here you work with mentors in real time to get the task done
                </div>
                <div className={styles.Progrct_link}>
                    <a href="/project_cat"> Learn more </a>
                    <img
                        style={{ marginLeft: "15px" }}
                        src="/images/smallarrow.png"
                    ></img>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Findnexproject