import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1400px;
  justify-content: space-between;
  display: flex;
  z-index: 2;
  flex-direction: column;
  padding: 0px;
  align-items: center;
  border-bottom: 8px solid #5736a3;
  background: #ebd8ff;
`;
export const Section = styled.section`
  display: flex;
  width: 1400px;
  padding: 0px;
  margin-bottom: 12px;
  justify-content: space-between;
`;
export const SectionFilters = styled.section`
  display: flex;
  max-width: 1400px;
  padding: 0px;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  font-size: 26px;
  padding: 0px 0px 0px 12px;
`;

export const GoBack = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  border: 4px solid gray;
  border-radius: 8px;
  margin: 5px 10px;
  padding: 4px;
`;
export const DropDown = styled.select`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #ccc;
  padding: 14px 28px 14px 28px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  background-color: #ebd8ff;
  &:active {
    background: #5cd3a8;
  }
`;
