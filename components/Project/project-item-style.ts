import styled from 'styled-components';

interface ProjectWrapperProps {
  reversed?: boolean;
}

export const ProjectWrapper = styled.section<ProjectWrapperProps>`
  width: 100%;
  max-width: 800px;
  max-height: 400px;
  padding: 48px;
  display: flex;
  padding-left: 100px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ProjectImage = styled.img`
  max-width: 400px;
  max-height: 400px;
`;