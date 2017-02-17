import styled from 'styled-components';
import { Shadow, Gradient, Tooltip } from '../../../shared/Globals'

export const Column = styled.div`
	display: flex;
	flex: 0 0 420px;
	flex-direction: column;
	border-right: 1px solid ${({ theme }) => theme.border.default};
	background-color: ${({ theme }) => theme.bg.wash};
	height: 100%;
	overflow-y: scroll;
`;

export const ScrollBody = styled.div`
	flex: 1 1 auto;
	display: flex;
	overflow-y: auto;
	overflow-x: hidden;
	flex-direction: column;
	align-items: stretch;
	background-color: ${({ theme }) => theme.bg.wash};

	> img {
		margin: 32px auto;
		transition: all 0.2s ease-out;

		&:hover {
			transform: scale(1.15);
			transition: all 0.2s ease-out;
		}
	}
	`;

export const Header = styled.div`
	display: flex;
	flex-direction: row-reverse;
	flex: 0 0 48px;
	width: 100%;
	background-color: ${({ theme }) => theme.bg.default};
	align-items: center;
	align-self: flex-start;
	justify-content: space-between;
	padding: 8px;
	z-index: 1;
	box-shadow: ${Shadow.low};


	> img {
		flex: 0 0 32px;
		transition: all 0.2s ease-out;

		&:hover {
			transform: scale(1.15);
			transition: all 0.2s ease-out;
		}
	}
`;

export const FrequencyName = styled.h2`
	margin: 0;
	font-size: 1rem;
	font-weight: 700;
`

export const Button = styled.div`
	background-color: transparent;
`;

export const BgText = styled.p`
	display: inline-block;
	padding: 4px 32px;
	text-align: center;
	flex: 0 0 auto;
	font-weight: bold;
	font-size: 14px;
	color: ${({ theme }) => theme.text.alt};

	&:first-of-type {
		margin-top: 16px;
	}
`;

export const JoinBtn = styled.button`
  font-size: 12px;
  font-weight: 800;
  flex: 0 0 80px;
  height: 28px;
  line-height: 26px;
  margin-left: 4px;
  text-align: center;
  vertical-align: middle;
  border-radius: 8px;
  border: 2px solid ${props => props.member ?  `${props.theme.inactive}` : 'transparent'};
  color: ${props => props.member ? `${props.theme.inactive}` : `${props.theme.text.reverse}` };
  background-color: ${props => props.member ? `transparent` : `${props.theme.brand.default}`};
  background-image: ${props => props.member ? `none` : Gradient(props.theme.brand.alt, props.theme.brand.default) };
  transition: all 0.2s ease-out;

  &:hover {
  	cursor: pointer;
		border-radius: 12px
		color: ${props => props.member ? `${props.theme.brand.default}` : `${props.theme.text.reverse}`};
		border-color: ${props => props.member ? `${props.theme.brand.default}` : 'transparent'};
		transition: all 0.2s ease-in;
  }
`;

export const LoginWrapper = styled.div`
	width: 100%;
	padding: 4px;
	display: flex;
	flex-direction: column;
	align-self: stretch;
	padding: 16px;
	border-radius: 2px;
	background-color: ${({ theme }) => theme.bg.default};
	margin: 8px;
	box-shadow: ${Shadow.low};
	transition: box-shadow 0.2s ease-in;
	width: calc(100% - 16px);

	&:hover {
		box-shadow: ${Shadow.mid};
		transition: box-shadow 0.2s ease-out;
		cursor: pointer;
	}
`;

export const LoginText = styled.p`
	flex: 1 0 auto;
	display: inline-block;
	font-size: 16px;
	font-weight: 600;
	margin: 8px 8px 24px;
	text-align: center;
`;

export const LoginButton = styled.button`
	font-size: 14px;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  height: 32px;
  line-height: 28px;
  text-align: center;
  vertical-align: middle;
  border-radius: 12px;
  color: ${({ theme }) => theme.text.reverse};
  background-color: ${({ theme }) => theme.brand.default};
  background-image: ${({ theme }) => Gradient(theme.brand.alt, theme.brand.default)};
  transition: all 0.2s ease-in-out;

  &:hover {
  	cursor: pointer;
		border-radius: 16px
		color: ${({ theme }) => theme.bg.default};;
  }
`;

export const HiddenInput = styled.input`
	display: none;
`;

export const TipButton = styled.button`
	background-color: transparent;
	${props => props.tipText ? Tooltip(props) : console.log('No Tooltip') };
`