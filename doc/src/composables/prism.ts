import { onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const usePrism = () => {
    onMounted(() => {
        Prism.highlightAll();
    });
};
export default usePrism;
