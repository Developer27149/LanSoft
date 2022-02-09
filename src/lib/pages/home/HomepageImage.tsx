import { Box } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "lib/components/motion/Box";

const HomepageImage = () => {
  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/Design-tools-amico.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
    </Box>
  );
};

export default HomepageImage;
