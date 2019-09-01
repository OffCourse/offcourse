import styled from "@emotion/styled";
import HeroSection from "@offcourse/homepage-theme/src/sections/HeroSection";
import Logo from "@offcourse/homepage-theme/src/components/Logo";

export default styled(HeroSection)`
  ${Logo} {
    padding: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    ${Logo} {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }
`;
