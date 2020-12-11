import styles from '../styles/Roadmap.module.css'
import { Animated } from "react-animated-css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlagIcon from '@material-ui/icons/Flag'

export default function Roadmap(props) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={2000} >
                    <h1 className={styles.title}>
                        CUBS roadmap
                    </h1>
                </Animated>
            </main>
            <div className={styles.content_zone} >
                <VerticalTimeline className={styles.timeline} animate={true} >
                    <VerticalTimelineElement
                        style={{color: "#ff0000" }}
                        contentStyle={{ background: '#CD2F76', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CD2F76' }}
                        iconStyle={{ background: '#CD2F76', color: '#fff',boxShadow: 'none' }}
                        icon={<FlagIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, May 2020</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        style={{color: "#ff0000" }}
                        contentStyle={{ background: '#CD2F76', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CD2F76' }}
                        iconStyle={{ background: '#CD2F76', color: '#fff', boxShadow: 'none' }}
                        icon={<FlagIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, May 2020</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        style={{color: "#ff0000" }}
                        contentStyle={{ background: '#CD2F76', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CD2F76' }}
                        iconStyle={{ background: '#CD2F76', color: '#fff', boxShadow: 'none' }}
                        icon={<FlagIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, May 2020</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}