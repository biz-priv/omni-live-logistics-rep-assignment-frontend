
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function PopOver ({...props}) {
  return (
    <>
  
        <OverlayTrigger
          trigger={props.trigger}
          key="right"
          placement={props?.placement}
          overlay={
            <Popover id={`popover-positioned`}>
              <Popover.Header as="h3">{props?.header}</Popover.Header>
              <Popover.Body>
                {props?.body}
              </Popover.Body>
            </Popover>
          }
        >
          <span>{props?.element} </span>
        </OverlayTrigger>

    </>
  );
}


export default PopOver;