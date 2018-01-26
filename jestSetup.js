import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@instructure/ui-themes/lib/canvas";

Enzyme.configure({ adapter: new Adapter() });
