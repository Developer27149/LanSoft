import {
  Box,
  Grid,
  Heading,
  Button,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
  });

  return (
    <Grid gap={2}>
      <Heading as="h2" fontSize={{ base: "lg", sm: "3xl" }}>
        你好！
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.100" : "gray.600"}
        padding={4}
        borderRadius={4}
      >
        <Box fontSize={textSize}>
          {/* This is a Next.js app with Chakra-UI and TypeScript setup. */}
          <p>
            仅以此站献给所有被广告、病毒、捆绑软件、流氓全家桶恶心到的小伙伴 🤮
          </p>
          <br />
          <p>你可以在这里下载你喜欢的软件，如果你有想要分享的资源 👏🏻 </p>
          <Button
            marginTop={2}
            as="a"
            href="mailto:rivenqinyy@gmail.com"
            target="_blank"
            size="sm"
          >
            联系我 📮
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SomeText;
