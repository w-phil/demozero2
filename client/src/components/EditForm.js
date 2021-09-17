import React, { useEffect, useState } from 'react';

const EditForm = props => {
    const { onSubmitHandler, initialName, initialType, initialDescription, initialSkill1, initialSkill2, initialSkill3 } = props
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);
    const [holdSkill1, setHoldSkill1] = useState("");
    const [holdSkill2, setHoldSkill2] = useState("");
    const [holdSkill3, setHoldSkill3] = useState("");

    useEffect(() => {
        if (skill1 === "") {
            setHoldSkill1("Nothing");
        } else {
            setHoldSkill1(skill1);
        }
        if (skill2 === "") {
            setHoldSkill2("Nothing");
        } else {
            setHoldSkill2(skill2);
        }
        if (skill3 === "") {
            setHoldSkill3("Nothing");
        } else {
            setHoldSkill3(skill3);
        }
    }, [])

    return (
        <form onSubmit={e => { onSubmitHandler(e, {name, type, description, skill1, skill2, skill3} ) } }>
            <p>
                <p>Pet Name:</p>
                <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/>
            </p>
            <p>
                <p>Pet Type:</p>
                <input type="text" value={type} name="type" onChange={(e)=>{setType(e.target.value)}}/>
            </p>
            <p>
                <p>Pet Description:</p>
                <input type="text" value={description} name="description" onChange={(e)=>{setDescription(e.target.value)}}/>
            </p>
            <p>
                <p>Skill 1:</p>
                <input type="text" value={holdSkill1} name="skill1" onChange={(e)=>{
                    setSkill1(e.target.value)
                    setHoldSkill1(e.target.value)}
                    }/>
            </p>
            <p>
                <p>Skill 2:</p>
                <input type="text" value={holdSkill2} name="skill2" onChange={(e)=>{
                    setSkill2(e.target.value)
                    setHoldSkill2(e.target.value)}}/>
            </p>
            <p>
                <p>Skill 3:</p>
                <input type="text" value={holdSkill3} name="skill3" onChange={(e)=>{
                    setSkill3(e.target.value)
                    setHoldSkill3(e.target.value)}}/>
            </p>
            <input type="submit" value="Edit Pet"/>
        </form>
    )
}

export default EditForm;