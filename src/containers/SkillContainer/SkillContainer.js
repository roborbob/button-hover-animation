import React, { Component } from 'react';
import styles from './SkillContainer.module.scss';
import Skill from '../../components/Skill/Skill';

class SkillContainer extends Component {

    state = {
        skills: {
            reactjs: {
                name: 'Reactjs',
            },
            html5: {
                name: 'html5',
            },
            sass: {
                name: 'Sass',
            },
            js: {
                name: 'Javascript',
            },
            php: {
                name: 'PHP',
            },
            C: {
                name: 'C',
            },
            salesForce: {
                name: 'SalesForce',
            }
            
        }
    }

    skillClickHandler() {
        console.log("clicked");
        // 
    }

    render() {

        const skillData = [];
        
        for (let key in this.state.skills) {
            skillData.push({
                id: key,
                config: this.state.skills[key],
            });
        }
        let skill = ( 
                skillData.map( skill =>         
                    <Skill
                        key={skill.id}
                        name={skill.config.name}
                        clicked={this.skillClickHandler} 
                        className={skill.config.name}  
                    />
                )
        )
        return (
            <section className={styles.SkillContainer}>
                {skill}
            </section>

        )
    }
}

export default SkillContainer;