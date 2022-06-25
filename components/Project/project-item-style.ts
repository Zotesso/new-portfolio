import styled from 'styled-components';

interface ProjectWrapperProps {
  reversed?: boolean;
}

export const ProjectWrapper = styled.section<ProjectWrapperProps>`
  width: 100%;
  max-height: 400px;
  padding: 24px;
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: flex-start;
`;

export const ProjectImage = styled.img`
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #44408e;
  -webkit-box-shadow: -1px 3px 15px -1px rgba(0,0,0,0.66); 
  box-shadow: -1px 3px 15px -1px rgba(0,0,0,0.66);
`;